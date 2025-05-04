import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { redirect } from 'next/navigation';
import { validFileType } from '../lib/valid-file-type';
import { AddedServerResponseType, ServerUploadFileType } from '../lib/definitions';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}


export const CategoryAdd: React.FC<Props> = ({ show, setShow }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [title, setTitle] = React.useState<string>('');
  const [fileUploadTextWarning, setFileUploadTextWarning] = React.useState<string>('');
  const [serverUploadFile, setServerUploadFile] = React.useState<ServerUploadFileType | null>(null);

  const [categoryAdd, setCategoryAdd] = React.useState<AddedServerResponseType>({});

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

  function handleClick() {
    inputRef.current?.click();
  }


  async function handleClickSave() {
    if (title.length === 0) return;

    const obj = {
      title,
      imageUrl: serverUploadFile?.fileName || '',
    };

    try {
      const res = await fetch('/api/category-add/', {
        method: 'POST',
        body: JSON.stringify(obj),
      });

      const data = await res.json();
      setCategoryAdd({ ...data });

      setTitle('');
      setServerUploadFile(null);
    } catch (err) {
      console.log(err);
    }
  }

  function handleClickExit() {
    setShow(false);
    setCategoryAdd({});
    redirect('/admin/category');
  }

  return (
    <div className={clsx('event-add-wrapper', show && 'show', !show && 'hidden')}>
      <div className="event-add">
        <div className="event-add__save">
          <button className="promo__box-link event-add__btn" onClick={handleClickSave}>
            Сохранить
          </button>
          <button className="event-add__save-exit" onClick={handleClickExit}>
            <Image width={16} height={16} src="/images/close-white.png" alt="exit" />
          </button>
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">Название</h3>
          <input
            className="event-add__box-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Названия категории"
            type="text"
          />
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">изображения</h3>
          <input
            className="event-add__box-input"
            placeholder="дата"
            type="file"
            onChange={handleFileUpload}
            id="img-load-input"
            ref={inputRef}
            hidden
          />

          <button className="event-add__btn-img promo__box-link" onClick={handleClick}>
            Загрузить файл
          </button>

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

          {categoryAdd.message && <div className="event-success">{categoryAdd.message}</div>}

          {categoryAdd.err && <div className="event-err">{categoryAdd.err}</div>}
        </div>
      </div>
    </div>
  );
};
