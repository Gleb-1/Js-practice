const dataExample = [
  {
    company: 'Alfreds <b>Futterkiste</b>',
    chef: 'Maria Anders',
    country: 'Germany',
  },
  {
    company: 'Centro comercial Moctezuma',
    chef: 'Francisco Chang',
    country: 'Mexico',
  },
  {
    company: 'Ernst Handel',
    chef: 'Roland Mendel',
    country: 'Austria',
  },
  {
    company: 'Island Trading',
    chef: 'Helen Bennett',
    country: 'UK',
  },
  {
    company: 'Laughing Bacchus Winecellars',
    chef: 'Yoshi Tannamuri',
    country: 'Canada',
    url: 'https://en.wikipedia.org/wiki/Canada',
  },
];

let Grid = new Goods();

const data = {
  element: 'body',
  header: 'Table',
  headerClass: ['header'],
  tableClass: ['header', 'site-header'],
  attribute: {
    company: {
      label: 'Компания',
    },
    chef: {
      label: 'Директор',
      value: function (data) {
        console.log(data);
        if (data.chef === 'Yoshi Tannamuri') {
          return data.chef + 'tel +993(80)12 15 14';
        }
        return data.chef;
      },
    },
    country: {
      label: 'Страна',
      value: function (data) {
        if (data.country === 'Canada') {
          return `<a href="${data.url}">${data.country}</a>`;
        }
        return data.country;
      },
    },
  },
  data: dataExample,
};

Grid.render(data);
