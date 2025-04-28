import { InsertProductTable, SelectCategoryTable, SelectProducesiltTable } from '@/db/schema';
import clsx from 'clsx';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

interface Props {
  show: boolean;
  categories: SelectCategoryTable[];
  producesilt: SelectProducesiltTable[];
}

type InputsType = {
  title: string;
  description: string;
  quantity: string;
  price: string;
  specifications: string;
};

type ServerUploadFileType = {
  message: 'Success' | 'Failed';
  fileName?: string;
};

export const ProductAdd: React.FC<Props> = ({ show, categories, producesilt }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [cats, setCats] = React.useState<string>(String(categories[0].id));

  const [selectProducesilt, setSelectProducesilt] = React.useState<string>(
    String(producesilt[0].id),
  );

  const [inputs, setInputs] = React.useState<InputsType>({
    title: '',
    description: '',
    quantity: '',
    price: '',
    specifications: '',
  });

  const [fileUploadTextWarning, setFileUploadTextWarning] = React.useState<string>('');
  const [serverUploadFile, setServerUploadFile] = React.useState<ServerUploadFileType | null>(null);

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
    if (
      inputs.title === '' ||
      inputs.description === '' ||
      inputs.price === '' ||
      inputs.specifications === '' ||
      inputs.quantity === ''
    )
      return;

    if (serverUploadFile?.message === 'Failed' || !serverUploadFile?.fileName) return;

    try {
      const obj: InsertProductTable = {
        title: inputs.title,
        description: inputs.description,
        price: Number(inputs.price),
        specifications: inputs.specifications,
        imageUrl: `/assets/${serverUploadFile.fileName}`,
        quantity: Number(inputs.quantity),
        producesiltId: Number(selectProducesilt),
        categoryId: Number(cats),
      };

      const res = await fetch('/api/product-add/', {
        method: 'POST',
        body: JSON.stringify(obj),
      });

      const data = await res.json();

      if (data.success) {
        setInputs({
          title: '',
          description: '',
          quantity: '',
          price: '',
          specifications: '',
        });

        redirect('/admin/product/');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={clsx('event-add-wrapper', show && 'show', !show && 'hidden')}>
      <div className="event-add">
        <div className="event-add__save">
          <button className="promo__box-link event-add__btn" onClick={handleClickSave}>
            Сохранить
          </button>
          <button className="event-add__save-exit">
            <Image width={16} height={16} src="/images/close-white.png" alt="exit" />
          </button>
        </div>
        <div className="event-add__box">
          <h3 className="event-add__box-title">заголовок</h3>
          <input
            className="event-add__box-input"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            placeholder="Названия продукта"
            type="text"
          />
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">описание</h3>
          <input
            value={inputs.description}
            onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
            className="event-add__box-input"
            placeholder="Описание продукта"
            type="text"
          />
        </div>

        <div className="event-add__box event-add__box--two">
          <h3 className="event-add__box-title">количество</h3>
          <input
            className="event-add__box-input"
            value={inputs.quantity}
            onChange={(e) => setInputs({ ...inputs, quantity: e.target.value })}
            placeholder="количество"
            type="number"
          />
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">цена</h3>
          <input
            className="event-add__box-input"
            placeholder="price"
            type="number"
            value={inputs.price}
            onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
          />
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">изображения</h3>
          <input
            className="event-add__box-input"
            placeholder="файл"
            type="file"
            id="img-load-input"
            onChange={handleFileUpload}
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
        </div>

        <div className="event-add__box">
          <h3 className="event-add__box-title">Технические характеристики</h3>
          <textarea
            className="event-add__box-textarea"
            name=""
            id=""
            value={inputs.specifications}
            onChange={(e) => setInputs({ ...inputs, specifications: e.target.value })}></textarea>
        </div>

        <div className="event-add__box event-add__box-choice">
          <h3 className="event-add__box-title">Категория</h3>
          <select onChange={(event) => setCats((event.target as HTMLSelectElement).value)}>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="event-add__box event-add__box-choice">
          <select
            onChange={(event) => setSelectProducesilt((event.target as HTMLSelectElement).value)}>
            {producesilt.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
