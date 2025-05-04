import { getNumber } from '@/shared/lib/utils';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();

    const width = getNumber(req.width);
    const length = getNumber(req.length);
    const height = getNumber(req.heightProd);

    const volume = width * length * height;

    const url = `places[0][]=${width}&places[0][]=${length}&places[0][]=${height}&places[0][]=${volume}&places[0][]=${req.weight}&places[0][]=0&places[0][]=0`;

    // https://calc.pecom.ru/bitrix/components/pecom/calc/ajax.php?&take[town]=-58740&deliver[town]=-584988
    const res = await fetch(
      `https://calc.pecom.ru/bitrix/components/pecom/calc/ajax.php?${url}&take[town]=-58740&deliver[town]=${req.cityId}`,
    );

    const data = await res.json();

    if (data.error_auto) {
      const errors = data.error;
      return NextResponse.json({
        errors,
      });
    }

    const auto = data.auto;

    return NextResponse.json({
      message: auto,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: 'Что-то пошло не так!',
      },
      {
        status: 500,
      },
    );
  }
}
