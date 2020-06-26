const dataCompany = [
  {
    company: 'EPAM Systems',
    chef: 'Аркадий Михайлович Добкин',
    country: 'Беларуси, Украине , России',
    social: {
      facebook: 'https://ru-ru.facebook.com/IPAM.TheMarketingSchool/',
      vk: 'https://vk.com/epam.belarus',
    },
  },
  {
    company: 'IBM',
    chef: ' Томастон, Мэн',
    country: 'США',
    social: {
      facebook: 'https://www.facebook.com/IBM/',
      vk: 'https://vk.com/ibmemess',
    },
  },
];



const data = {
  element: 'body',
  header: 'Компании',
  headerClass: ['header'],
  tableClass: ['header'],
  attribute: {
    company: {
      lable: 'Компания',
    },
    chef: {
      lable: 'Директор',
    },
    country: {
      lable: 'Страна',
    },
    social: {
      lable: 'Соц. Сети',
      value: function (data) {
        let out = '';
        for (let key in data.social) {
          out += `<a href="${data.social[key]}"> ${key}</a>`;
        }
        return out;
      },
    },
  },
  source: dataCompany,
};
let company = new Company(data);
company.render();
// console.log(data);
// console.log(company);
