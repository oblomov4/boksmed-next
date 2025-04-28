'use client';

import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { redirect } from 'next/navigation';

interface Props {
  show: boolean;
  title: string;
  imageUrl: string;
  setShow: (value: boolean) => void;
  id: number;
}

type ServerUploadFileType = {
  message: 'Success' | 'Failed';
  fileName?: string;
};

type UpdatedServerResponseType = {
  message?: string;
  err?: string;
};

export const EditCategory: React.FC<Props> = ({ show, setShow, title, imageUrl, id }) => {
  const [input, setInput] = React.useState<string>(title);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileUploadTextWarning, setFileUploadTextWarning] = React.useState<string>('');
  const [serverUploadFile, setServerUploadFile] = React.useState<ServerUploadFileType | null>(null);
  const [updatedServerResponse, setUpdatedServerResponse] =
    React.useState<UpdatedServerResponseType>({});

  function handleClick() {
    inputRef.current?.click();
  }

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      setFileUploadTextWarning('Файл не выбран!');
      return;
    }
    const file = event.target.files[0];

    if (validFileType(file)) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await fetch('/api/file', {
          method: 'POST',
          body: formData,
        });

        const data: ServerUploadFileType = await res.json();
        setServerUploadFile(data);
        setFileUploadTextWarning('');
      } catch (err) {
        console.log(err);
      }
    } else {
      setFileUploadTextWarning('Файл должен быть с расширением .png или .jpeg');
    }
  }

  function validFileType(file: File) {
    const fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];
    for (let i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }
    return false;
  }

  async function handleClickSave() {
    if (title === input && !serverUploadFile) return;

    if (input.length === 0) return;

    try {
      const res = await fetch('/api/category-change/', {
        method: 'POST',
        body: JSON.stringify({
          id,
          title: input,
          imageUrl: serverUploadFile?.fileName || '',
        }),
      });

      const data: UpdatedServerResponseType = await res.json();

      setUpdatedServerResponse(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleClickExit() {
    setUpdatedServerResponse({});
    setShow(false);
    redirect('/admin/category');
  }

  return (
    <div className={clsx('event-add-wrapper', show && 'show', !show && 'hidden')}>
      <div className="event-add">
        <div className="event-add__save">
          <button className="promo__box-link event-add__btn" onClick={handleClickSave}>
            Сохранить
          </button>
          <button className="event-add__save-exit">
            <Image
              width={16}
              height={16}
              src="/images/close-white.png"
              alt="exit"
              onClick={handleClickExit}
            />
          </button>

          <div className="event-add__box">
            <h3 className="event-add__box-title">Название</h3>
            <input
              className="event-add__box-input"
              placeholder="Названия категории"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="event-add__box">
            <h3 className="event-add__box-title">изображения</h3>
            <input
              className="event-add__box-input"
              placeholder="дата"
              type="file"
              id="img-load-input"
              hidden
              onChange={handleFileUpload}
              ref={inputRef}
            />
            <button className="event-add__btn-img promo__box-link" onClick={handleClick}>
              Загрузить файл
            </button>

            {imageUrl && !serverUploadFile && (
              <div className="preview">
                <Image src={imageUrl} width={70} height={52} alt={imageUrl} />
                <div className="image-buttons">
                  <button className="image-buttton" onClick={handleClick}>
                    заменить фото
                  </button>
                  <button className="image-buttons-del">
                    <Image width={18} height={18} src="/images/del.png" alt="delete" />
                  </button>
                </div>
              </div>
            )}

            {fileUploadTextWarning && (
              <div className="warnings-upload">
                <p>{fileUploadTextWarning}</p>
              </div>
            )}

            {serverUploadFile?.message === 'Success' && serverUploadFile.fileName && (
              <div className="preview">
                <Image
                  src={`/assets/${serverUploadFile.fileName}`}
                  width={70}
                  height={52}
                  alt={serverUploadFile.fileName}
                />
                <div className="image-buttons">
                  <button className="image-buttton" onClick={handleClick}>
                    заменить фото
                  </button>
                  <button className="image-buttons-del" onClick={() => setServerUploadFile(null)}>
                    <Image width={18} height={18} src="/images/del.png" alt="delete" />
                  </button>
                </div>
              </div>
            )}

            {updatedServerResponse.message && (
              <div className="event-success">{updatedServerResponse.message}</div>
            )}

            {updatedServerResponse.err && (
              <div className="event-err">{updatedServerResponse.err}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
