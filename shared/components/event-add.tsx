'use client';

import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { validFileType } from '../lib/valid-file-type';
import { AddedServerResponseType, ServerUploadFileType } from '../lib/definitions';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

type EventTextType = {
  title: string;
  description: string;
};


export const EventAdd: React.FC<Props> = ({ show, setShow }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileUploadTextWarning, setFileUploadTextWarning] = React.useState<string>('');
  const [serverUploadFile, setServerUploadFile] = React.useState<ServerUploadFileType | null>(null);
  const [eventText, setEventText] = React.useState<EventTextType>({
    title: '',
    description: '',
  });

  const [eventAddServerResponse, setEventAddServerResponse] =
    React.useState<AddedServerResponseType>({});

  function handleClick() {
    setEventAddServerResponse({});
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

  async function handleSaveEvent() {
    if (eventText.title === '' || eventText.description === '') return;

    if (serverUploadFile?.message !== 'Success') {
      setFileUploadTextWarning('Загрузите изображение!');
      return;
    }

    try {
      const obj = {
        ...eventText,
        imageUrl: serverUploadFile?.fileName,
      };

      const res = await fetch('/api/event-add', {
        method: 'POST',
        body: JSON.stringify(obj),
      });

      const data = await res.json();

      setEventAddServerResponse({ ...data });
      setEventText({
        title: '',
        description: '',
      });
      setServerUploadFile(null);
    } catch (err) {
      console.log(err);
    }
  }

  function handleExitModal() {
    setShow(false);
    redirect('/admin/about');
  }

  return (
    <div className={clsx('event-add-wrapper', show && 'show', !show && 'hidden')}>
      <div className="event-add">
        <div className="event-add__save">
          <button
            className="promo__box-link event-add__btn"
            disabled={eventText.title === '' || eventText.description == ''}
            onClick={handleSaveEvent}>
            Сохранить
          </button>
          <button className="event-add__save-exit" onClick={handleExitModal}>
            <Image width={16} height={16} src="/images/close-white.png" alt="exit" />
          </button>
        </div>
        <div className="event-add__box">
          <h3 className="event-add__box-title">Название</h3>
          <input
            className="event-add__box-input"
            placeholder="Названия события"
            type="text"
            value={eventText.title}
            onChange={(e) =>
              setEventText({
                ...eventText,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">описание</h3>
          <input
            className="event-add__box-input"
            placeholder="Описаниея события"
            type="text"
            value={eventText.description}
            onChange={(e) =>
              setEventText({
                ...eventText,
                description: e.target.value,
              })
            }
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

          {eventAddServerResponse.message && (
            <div className="event-success">{eventAddServerResponse.message}</div>
          )}

          {eventAddServerResponse.err && (
            <div className="event-err">{eventAddServerResponse.err}</div>
          )}
        </div>
      </div>
    </div>
  );
};
