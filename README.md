# Pixel
Инструмент пикселизации изображений. Метод цифровой обработки изображений, заключающийся в существенном уменьшении разрешения изображения.

![](https://github.com/mir-one/pixel/blob/main/banner.png)
Метод пикселизации заключается в следующем: изображение делится на квадраты (блоки, пиксели) нужного размера, в каждом из них определяется основной цвет, после чего выполняется заливка квадрата полностью этим цветом.

11 апреля опубликовали заметку о разрешительной лицензии CC0 для коллекции Отпечатков.
 
Разрешительная лицензия:
1. В формате Creative Commons Zero (CC0), позволяет создавать творческие ремиксы с преимуществами как для оригинала, так и для производных.
2. Акцент на низкой точности + метаданные.
3. Классификация метаданных по пакетам исходников в CID. Сборка из ipfs(x1+x2+...xn) (открыли алгоритм генерации отпечатков)

Итого: Владелец NFT не зависит от авторских прав на итоговое изображения, на которое делается ссылка. Авторские права закрепляются за создателем. Это ограничивает владельца (покупателя) пользоваться только ссылкой. Владельцу не разрешается использовать изображение, каким либо способом, особенно в коммерческих целях. неизменный механизм временных рядов в сети TON помогает узаконить эту ссылку. Все логично и для создателя, т.к. он не теряет контроль над своим РИД (результат интеллектуальной деятельности), т.к. если производные работы оригинала будут использованы для спекуляционных целей - это навредит первоначальному создателю. CC0 усиливает ценность, потому что: создатель может получать прибыль не только от оригинальной работы, но и от производных, по цепочке добавленной стоимости. 

Модель: Первоначальный автор выбирает CC0, по причине:
1. Автор А создает контент по лицензии CC0
2. Продает NFT №1 контент CC0 лицу Б
3. Лицо Б решает создать производный контент CC0
4. Лицо Б продает производную NFT №2 контента CC0 лицу Г
5. Лицо Г понравилась производная работа и он решает купить оригинал NFT №1
6. Таким образом Лицо А получает роялти от продажи. Лицо Б получает доход от продажи производной работы + (пере)продажи от оригинального NFT. Лицо Г - счастливый коллекционер и оригинальной работы и производной.
7. Лицо Г решает создать производную работы от NFT №2 или NFT №1  ... и т.д.

## Установка

Клонируйте репозиторий 
```sh
git clone https://github.com/mir-one/pixel.git
```
![](https://github.com/mir-one/pixel/blob/main/git.png)

Перейдите в каталог проекта и запустите эту команду, если у вас установлен yarn

```sh
yarn install
```
![](https://github.com/mir-one/pixel/blob/main/yarn.png)

Если у вас установлен node, запустите эту команду:

```sh
npm install
```

## Пикселизация

Чтобы сделать пикселизацию, необходим список изображений, которые вы хотите преобразовать. Поместите все изображения в каталог `/input`.
![](https://github.com/mir-one/pixel/blob/main/input.png)

Запустите команду:

```sh
node index.js
```
![](https://github.com/mir-one/pixel/blob/main/node.png)

Все ваши изображения будут обработаны в каталог `/output`.
Если вы хотите изменить коэффициент пикселизации, можно изменить `ratio` объекта `pixelFormat` в файле `src/config.js`. Чем меньше число слева, тем более "пиксельным" будет изображение.

```js
const pixelFormat = {
  ratio: 30 / 256,
};
```
![](https://github.com/mir-one/pixel/blob/main/result.png)
Готово! Пикселизация закончена.