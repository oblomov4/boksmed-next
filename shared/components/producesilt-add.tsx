import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { redirect } from 'next/navigation';
import { validFileType } from '../lib/valid-file-type';
import { AddedServerResponseType, ServerUploadFileType } from '../lib/definitions';

interface Props {
  className?: string;
  show: boolean;
  setShow: (value: boolean) => void;
}

type InputsType = {
  title: string;
  description: string;
};

export const ProducesiltAdd: React.FC<Props> = ({ show, setShow }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = React.useState<InputsType>({
    title: '',
    description: '',
  });
  const [fileUploadTextWarning, setFileUploadTextWarning] = React.useState<string>('');
  const [serverUploadFile, setServerUploadFile] = React.useState<ServerUploadFileType | null>(null);

  const [producesiltAdd, setProducesiltAdd] = React.useState<AddedServerResponseType>({});

  function handleClick() {
    inputRef.current?.click();
  }

  async function handleClickSave() {
    if (inputs.description === '' || inputs.title === '') return;
    if (serverUploadFile?.message !== 'Success') return;

    try {
      const res = await fetch('/api/producesilt-add/', {
        method: 'POST',
        body: JSON.stringify({ ...inputs, imageUrl: serverUploadFile.fileName }),
      });

      const data = await res.json();

      setProducesiltAdd({ ...data });

      setInputs({
        title: '',
        description: '',
      });

      setServerUploadFile(null);
    } catch (err) {
      console.log(err);
    }
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

  function handleClickExit() {
    setShow(false);
    setProducesiltAdd({});
    setFileUploadTextWarning('');
    setServerUploadFile(null);
    redirect('/admin/producesilt');
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
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            placeholder="Имя производителя"
            type="text"
          />
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">Описание</h3>
          <input
            className="event-add__box-input"
            placeholder="Описание производителя"
            type="text"
            value={inputs.description}
            onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
          />
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">изображения</h3>
          <input
            className="event-add__box-input"
            placeholder="файл"
            type="file"
            id="img-load-input"
            ref={inputRef}
            onChange={handleFileUpload}
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

          {producesiltAdd.message && <div className="event-success">{producesiltAdd.message}</div>}

          {producesiltAdd.err && <div className="event-err">{producesiltAdd.err}</div>}
        </div>
      </div>
    </div>
  );
};
