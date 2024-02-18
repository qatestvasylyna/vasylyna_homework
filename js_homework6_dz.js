//дз1
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[x]] = [arr[x], arr[i]];
    }
}
myBlend(arr)
console.log('Перетусований масив =', arr);




//дз2
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        },
        {
            name: 'Клієнт 3',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 3.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                }
              ]
            },
        {
            name: 'Клієнт 4',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        },
    ]
};

function findValueByKey(companyName, clients) {
    for (const client of clients) {
        if (client.name === companyName) {
            return client;
        }
        if (client.partners && client.partners.length > 0) {
            const foundPartners = client.partners.filter(partner => partner.name === companyName);
            if (foundPartners.length > 0) {
                return foundPartners[0];
            } else {
                const foundSubPartners = findValueByKey(companyName, client.partners);
                if (foundSubPartners) {
                    return foundSubPartners;
                }
            }
        }
    }
    return null;
}

const companyName = 'Клієнт 3.1';
const foundCompany = findValueByKey(companyName, company.clients);
if (foundCompany) {
    console.log('Інформація');
    console.log(foundCompany);
} else {
    console.log(`"${companyName}" не знайден`);
}

