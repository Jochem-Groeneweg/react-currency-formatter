<h1 align="center">Welcome to my React Currency Formatter 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-currency-formatter" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-currency-formatter.svg">
  </a>
  <a href="https://github.com/Jochem-Groeneweg/react-currency-formatter#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Jochem-Groeneweg/react-currency-formatter/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Jochem-Groeneweg/react-currency-formatter/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-green" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/Jochem-Groeneweg/react-currency-formatter#readme)

## Install

```sh
npm install react-format-currencies
```

## Usage

Import the React Component and/or 'formatCurrency' function and specify the currency.

### Code example:

```jsx
import "./App.css";
import { Currency, formatCurrency } from "./hooks/react-currency-formatter";

function App() {
  console.log(formatCurrency("GBP", 60));
  return (
    <div className="App">
      <Currency currency="BRL">3.59</Currency>
    </div>
  );
}

export default App;
```

## Supported currency codes

| Location                                                   | Currency                                                          | Currency Code |
| ---------------------------------------------------------- | ----------------------------------------------------------------- | ------------- |
| AFGHANISTAN                                                | Afghani                                                           | AFN           |
| ÅLAND ISLANDS                                              | Euro                                                              | EUR           |
| ALBANIA                                                    | Lek                                                               | ALL           |
| ALGERIA                                                    | Algerian Dinar                                                    | DZD           |
| AMERICAN SAMOA                                             | US Dollar                                                         | USD           |
| ANDORRA                                                    | Euro                                                              | EUR           |
| ANGOLA                                                     | Kwanza                                                            | AOA           |
| ANGUILLA                                                   | East Caribbean Dollar                                             | XCD           |
| ANTARCTICA                                                 | No universal currency                                             |               |
| ANTIGUA AND BARBUDA                                        | East Caribbean Dollar                                             | XCD           |
| ARGENTINA                                                  | Argentine Peso                                                    | ARS           |
| ARMENIA                                                    | Armenian Dram                                                     | AMD           |
| ARUBA                                                      | Aruban Florin                                                     | AWG           |
| AUSTRALIA                                                  | Australian Dollar                                                 | AUD           |
| AUSTRIA                                                    | Euro                                                              | EUR           |
| AZERBAIJAN                                                 | Azerbaijan Manat                                                  | AZN           |
| BAHAMAS (THE)                                              | Bahamian Dollar                                                   | BSD           |
| BAHRAIN                                                    | Bahraini Dinar                                                    | BHD           |
| BANGLADESH                                                 | Taka                                                              | BDT           |
| BARBADOS                                                   | Barbados Dollar                                                   | BBD           |
| BELARUS                                                    | Belarusian Ruble                                                  | BYN           |
| BELGIUM                                                    | Euro                                                              | EUR           |
| BELIZE                                                     | Belize Dollar                                                     | BZD           |
| BENIN                                                      | CFA Franc BCEAO                                                   | XOF           |
| BERMUDA                                                    | Bermudian Dollar                                                  | BMD           |
| BHUTAN                                                     | Indian Rupee                                                      | INR           |
| BHUTAN                                                     | Ngultrum                                                          | BTN           |
| BOLIVIA (PLURINATIONAL STATE OF)                           | Boliviano                                                         | BOB           |
| BOLIVIA (PLURINATIONAL STATE OF)                           | Mvdol                                                             | BOV           |
| BONAIRE, SINT EUSTATIUS AND SABA                           | US Dollar                                                         | USD           |
| BOSNIA AND HERZEGOVINA                                     | Convertible Mark                                                  | BAM           |
| BOTSWANA                                                   | Pula                                                              | BWP           |
| BOUVET ISLAND                                              | Norwegian Krone                                                   | NOK           |
| BRAZIL                                                     | Brazilian Real                                                    | BRL           |
| BRITISH INDIAN OCEAN TERRITORY (THE)                       | US Dollar                                                         | USD           |
| BRUNEI DARUSSALAM                                          | Brunei Dollar                                                     | BND           |
| BULGARIA                                                   | Bulgarian Lev                                                     | BGN           |
| BURKINA FASO                                               | CFA Franc BCEAO                                                   | XOF           |
| BURUNDI                                                    | Burundi Franc                                                     | BIF           |
| CABO VERDE                                                 | Cabo Verde Escudo                                                 | CVE           |
| CAMBODIA                                                   | Riel                                                              | KHR           |
| CAMEROON                                                   | CFA Franc BEAC                                                    | XAF           |
| CANADA                                                     | Canadian Dollar                                                   | CAD           |
| CAYMAN ISLANDS (THE)                                       | Cayman Islands Dollar                                             | KYD           |
| CENTRAL AFRICAN REPUBLIC (THE)                             | CFA Franc BEAC                                                    | XAF           |
| CHAD                                                       | CFA Franc BEAC                                                    | XAF           |
| CHILE                                                      | Chilean Peso                                                      | CLP           |
| CHILE                                                      | Unidad de Fomento                                                 | CLF           |
| CHINA                                                      | Yuan Renminbi                                                     | CNY           |
| CHRISTMAS ISLAND                                           | Australian Dollar                                                 | AUD           |
| COCOS (KEELING) ISLANDS (THE)                              | Australian Dollar                                                 | AUD           |
| COLOMBIA                                                   | Colombian Peso                                                    | COP           |
| COLOMBIA                                                   | Unidad de Valor Real                                              | COU           |
| COMOROS (THE)                                              | Comorian Franc                                                    | KMF           |
| CONGO (THE DEMOCRATIC REPUBLIC OF THE)                     | Congolese Franc                                                   | CDF           |
| CONGO (THE)                                                | CFA Franc BEAC                                                    | XAF           |
| COOK ISLANDS (THE)                                         | New Zealand Dollar                                                | NZD           |
| COSTA RICA                                                 | Costa Rican Colon                                                 | CRC           |
| CÔTE D'IVOIRE                                              | CFA Franc BCEAO                                                   | XOF           |
| CROATIA                                                    | Kuna                                                              | HRK           |
| CUBA                                                       | Cuban Peso                                                        | CUP           |
| CUBA                                                       | Peso Convertible                                                  | CUC           |
| CURAÇAO                                                    | Netherlands Antillean Guilder                                     | ANG           |
| CYPRUS                                                     | Euro                                                              | EUR           |
| CZECHIA                                                    | Czech Koruna                                                      | CZK           |
| DENMARK                                                    | Danish Krone                                                      | DKK           |
| DJIBOUTI                                                   | Djibouti Franc                                                    | DJF           |
| DOMINICA                                                   | East Caribbean Dollar                                             | XCD           |
| DOMINICAN REPUBLIC (THE)                                   | Dominican Peso                                                    | DOP           |
| ECUADOR                                                    | US Dollar                                                         | USD           |
| EGYPT                                                      | Egyptian Pound                                                    | EGP           |
| EL SALVADOR                                                | El Salvador Colon                                                 | SVC           |
| EL SALVADOR                                                | US Dollar                                                         | USD           |
| EQUATORIAL GUINEA                                          | CFA Franc BEAC                                                    | XAF           |
| ERITREA                                                    | Nakfa                                                             | ERN           |
| ESTONIA                                                    | Euro                                                              | EUR           |
| ETHIOPIA                                                   | Ethiopian Birr                                                    | ETB           |
| EUROPEAN UNION                                             | Euro                                                              | EUR           |
| FALKLAND ISLANDS (THE) [MALVINAS]                          | Falkland Islands Pound                                            | FKP           |
| FAROE ISLANDS (THE)                                        | Danish Krone                                                      | DKK           |
| FIJI                                                       | Fiji Dollar                                                       | FJD           |
| FINLAND                                                    | Euro                                                              | EUR           |
| FRANCE                                                     | Euro                                                              | EUR           |
| FRENCH GUIANA                                              | Euro                                                              | EUR           |
| FRENCH POLYNESIA                                           | CFP Franc                                                         | XPF           |
| FRENCH SOUTHERN TERRITORIES (THE)                          | Euro                                                              | EUR           |
| GABON                                                      | CFA Franc BEAC                                                    | XAF           |
| GAMBIA (THE)                                               | Dalasi                                                            | GMD           |
| GEORGIA                                                    | Lari                                                              | GEL           |
| GERMANY                                                    | Euro                                                              | EUR           |
| GHANA                                                      | Ghana Cedi                                                        | GHS           |
| GIBRALTAR                                                  | Gibraltar Pound                                                   | GIP           |
| GREECE                                                     | Euro                                                              | EUR           |
| GREENLAND                                                  | Danish Krone                                                      | DKK           |
| GRENADA                                                    | East Caribbean Dollar                                             | XCD           |
| GUADELOUPE                                                 | Euro                                                              | EUR           |
| GUAM                                                       | US Dollar                                                         | USD           |
| GUATEMALA                                                  | Quetzal                                                           | GTQ           |
| GUERNSEY                                                   | Pound Sterling                                                    | GBP           |
| GUINEA                                                     | Guinean Franc                                                     | GNF           |
| GUINEA-BISSAU                                              | CFA Franc BCEAO                                                   | XOF           |
| GUYANA                                                     | Guyana Dollar                                                     | GYD           |
| HAITI                                                      | Gourde                                                            | HTG           |
| HAITI                                                      | US Dollar                                                         | USD           |
| HEARD ISLAND AND McDONALD ISLANDS                          | Australian Dollar                                                 | AUD           |
| HOLY SEE (THE)                                             | Euro                                                              | EUR           |
| HONDURAS                                                   | Lempira                                                           | HNL           |
| HONG KONG                                                  | Hong Kong Dollar                                                  | HKD           |
| HUNGARY                                                    | Forint                                                            | HUF           |
| ICELAND                                                    | Iceland Krona                                                     | ISK           |
| INDIA                                                      | Indian Rupee                                                      | INR           |
| INDONESIA                                                  | Rupiah                                                            | IDR           |
| INTERNATIONAL MONETARY FUND (IMF)                          | SDR (Special Drawing Right)                                       | XDR           |
| IRAN (ISLAMIC REPUBLIC OF)                                 | Iranian Rial                                                      | IRR           |
| IRAQ                                                       | Iraqi Dinar                                                       | IQD           |
| IRELAND                                                    | Euro                                                              | EUR           |
| ISLE OF MAN                                                | Pound Sterling                                                    | GBP           |
| ISRAEL                                                     | New Israeli Sheqel                                                | ILS           |
| ITALY                                                      | Euro                                                              | EUR           |
| JAMAICA                                                    | Jamaican Dollar                                                   | JMD           |
| JAPAN                                                      | Yen                                                               | JPY           |
| JERSEY                                                     | Pound Sterling                                                    | GBP           |
| JORDAN                                                     | Jordanian Dinar                                                   | JOD           |
| KAZAKHSTAN                                                 | Tenge                                                             | KZT           |
| KENYA                                                      | Kenyan Shilling                                                   | KES           |
| KIRIBATI                                                   | Australian Dollar                                                 | AUD           |
| KOREA (THE DEMOCRATIC PEOPLE'S REPUBLIC OF)                | North Korean Won                                                  | KPW           |
| KOREA (THE REPUBLIC OF)                                    | Won                                                               | KRW           |
| KUWAIT                                                     | Kuwaiti Dinar                                                     | KWD           |
| KYRGYZSTAN                                                 | Som                                                               | KGS           |
| LAO PEOPLE'S DEMOCRATIC REPUBLIC (THE)                     | Lao Kip                                                           | LAK           |
| LATVIA                                                     | UR                                                                | EUR           |
| LEBANON                                                    | Lebanese Pound                                                    | LBP           |
| LESOTHO                                                    | Loti                                                              | LSL           |
| LESOTHO                                                    | Rand                                                              | ZAR           |
| LIBERIA                                                    | Liberian Dollar                                                   | LRD           |
| LIBYA                                                      | Libyan Dinar                                                      | LYD           |
| LIECHTENSTEIN                                              | Swiss Franc                                                       | CHF           |
| LITHUANIA                                                  | Euro                                                              | EUR           |
| LUXEMBOURG                                                 | Euro                                                              | EUR           |
| MACAO                                                      | Pataca                                                            | MOP           |
| MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)                | Denar                                                             | MKD           |
| MADAGASCAR                                                 | Malagasy Ariary                                                   | MGA           |
| MALAWI                                                     | Malawi Kwacha                                                     | MWK           |
| MALAYSIA                                                   | Malaysian Ringgit                                                 | MYR           |
| MALDIVES                                                   | Rufiyaa                                                           | MVR           |
| MALI                                                       | CFA Franc BCEAO                                                   | XOF           |
| MALTA                                                      | Euro                                                              | EUR           |
| MARSHALL ISLANDS (THE)                                     | US Dollar                                                         | USD           |
| MARTINIQUE                                                 | Euro                                                              | EUR           |
| MAURITANIA                                                 | Ouguiya                                                           | MRU           |
| MAURITIUS                                                  | Mauritius Rupee                                                   | MUR           |
| MAYOTTE                                                    | Euro                                                              | EUR           |
| MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP     | ADB Unit of Account                                               | XUA           |
| MEXICO                                                     | Mexican Peso                                                      | MXN           |
| MEXICO                                                     | Mexican Unidad de Inversion (UDI)                                 | MXV           |
| MICRONESIA (FEDERATED STATES OF)                           | US Dollar                                                         | USD           |
| MOLDOVA (THE REPUBLIC OF)                                  | Moldovan Leu                                                      | MDL           |
| MONACO                                                     | Euro                                                              | EUR           |
| MONGOLIA                                                   | Tugrik                                                            | MNT           |
| MONTENEGRO                                                 | Euro                                                              | EUR           |
| MONTSERRAT                                                 | East Caribbean Dollar                                             | XCD           |
| MOROCCO                                                    | Moroccan Dirham                                                   | MAD           |
| MOZAMBIQUE                                                 | Mozambique Metical                                                | MZN           |
| MYANMAR                                                    | Kyat                                                              | MMK           |
| NAMIBIA                                                    | Namibia Dollar                                                    | NAD           |
| NAMIBIA                                                    | Rand                                                              | ZAR           |
| NAURU                                                      | Australian Dollar                                                 | AUD           |
| NEPAL                                                      | Nepalese Rupee                                                    | NPR           |
| NETHERLANDS (THE)                                          | Euro                                                              | EUR           |
| NEW CALEDONIA                                              | CFP Franc                                                         | XPF           |
| NEW ZEALAND                                                | New Zealand Dollar                                                | NZD           |
| NICARAGUA                                                  | Cordoba Oro                                                       | NIO           |
| NIGER (THE)                                                | CFA Franc BCEAO                                                   | XOF           |
| NIGERIA                                                    | Naira                                                             | NGN           |
| NIUE                                                       | New Zealand Dollar                                                | NZD           |
| NORFOLK ISLAND                                             | Australian Dollar                                                 | AUD           |
| NORTHERN MARIANA ISLANDS (THE)                             | US Dollar                                                         | USD           |
| NORWAY                                                     | Norwegian Krone                                                   | NOK           |
| OMAN                                                       | Rial Omani                                                        | OMR           |
| PAKISTAN                                                   | Pakistan Rupee                                                    | PKR           |
| PALAU                                                      | US Dollar                                                         | USD           |
| PALESTINE, STATE OF                                        | No universal currency                                             |               |
| PANAMA                                                     | Balboa                                                            | PAB           |
| PANAMA                                                     | US Dollar                                                         | USD           |
| PAPUA NEW GUINEA                                           | Kina                                                              | PGK           |
| PARAGUAY                                                   | Guarani                                                           | PYG           |
| PERU                                                       | Sol                                                               | PEN           |
| PHILIPPINES (THE)                                          | Philippine Peso                                                   | PHP           |
| PITCAIRN                                                   | New Zealand Dollar                                                | NZD           |
| POLAND                                                     | Zloty                                                             | PLN           |
| PORTUGAL                                                   | Euro                                                              | EUR           |
| PUERTO RICO                                                | US Dollar                                                         | USD           |
| QATAR                                                      | Qatari Rial                                                       | QAR           |
| RÉUNION                                                    | Euro                                                              | EUR           |
| ROMANIA                                                    | Romanian Leu                                                      | RON           |
| RUSSIAN FEDERATION (THE)                                   | Russian Ruble                                                     | RUB           |
| RWANDA                                                     | Rwanda Franc                                                      | RWF           |
| SAINT BARTHÉLEMY                                           | Euro                                                              | EUR           |
| SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA               | Saint Helena Pound                                                | SHP           |
| SAINT KITTS AND NEVIS                                      | East Caribbean Dollar                                             | XCD           |
| SAINT LUCIA                                                | East Caribbean Dollar                                             | XCD           |
| SAINT MARTIN (FRENCH PART)                                 | Euro                                                              | EUR           |
| SAINT PIERRE AND MIQUELON                                  | Euro                                                              | EUR           |
| SAINT VINCENT AND THE GRENADINES                           | East Caribbean Dollar                                             | XCD           |
| SAMOA                                                      | Tala                                                              | WST           |
| SAN MARINO                                                 | Euro                                                              | EUR           |
| SAO TOME AND PRINCIPE                                      | Dobra                                                             | STN           |
| SAUDI ARABIA                                               | Saudi Riyal                                                       | SAR           |
| SENEGAL                                                    | CFA Franc BCEAO                                                   | XOF           |
| SERBIA                                                     | Serbian Dinar                                                     | RSD           |
| SEYCHELLES                                                 | Seychelles Rupee                                                  | SCR           |
| SIERRA LEONE                                               | Leone                                                             | SLL           |
| SINGAPORE                                                  | Singapore Dollar                                                  | SGD           |
| SINT MAARTEN (DUTCH PART)                                  | Netherlands Antillean Guilder                                     | ANG           |
| SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE" | Sucre                                                             | XSU           |
| SLOVAKIA                                                   | Euro                                                              | EUR           |
| SLOVENIA                                                   | Euro                                                              | EUR           |
| SOLOMON ISLANDS                                            | Solomon Islands Dollar                                            | SBD           |
| SOMALIA                                                    | Somali Shilling                                                   | SOS           |
| SOUTH AFRICA                                               | Rand                                                              | ZAR           |
| SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS               | No universal currency                                             |               |
| SOUTH SUDAN                                                | South Sudanese Pound                                              | SSP           |
| SPAIN                                                      | Euro                                                              | EUR           |
| SRI LANKA                                                  | Sri Lanka Rupee                                                   | LKR           |
| SUDAN (THE)                                                | Sudanese Pound                                                    | SDG           |
| SURINAME                                                   | Surinam Dollar                                                    | SRD           |
| SVALBARD AND JAN MAYEN                                     | Norwegian Krone                                                   | NOK           |
| ESWATINI                                                   | Lilangeni                                                         | SZL           |
| SWEDEN                                                     | Swedish Krona                                                     | SEK           |
| SWITZERLAND                                                | Swiss Franc                                                       | CHF           |
| SWITZERLAND                                                | WIR Euro                                                          | CHE           |
| SWITZERLAND                                                | WIR Franc                                                         | CHW           |
| SYRIAN ARAB REPUBLIC                                       | Syrian Pound                                                      | SYP           |
| TAIWAN (PROVINCE OF CHINA)                                 | New Taiwan Dollar                                                 | TWD           |
| TAJIKISTAN                                                 | Somoni                                                            | TJS           |
| TANZANIA, UNITED REPUBLIC OF                               | Tanzanian Shilling                                                | TZS           |
| THAILAND                                                   | Baht                                                              | THB           |
| TIMOR-LESTE                                                | US Dollar                                                         | USD           |
| TOGO                                                       | CFA Franc BCEAO                                                   | XOF           |
| TOKELAU                                                    | New Zealand Dollar                                                | NZD           |
| TONGA                                                      | Pa'anga                                                           | TOP           |
| TRINIDAD AND TOBAGO                                        | Trinidad and Tobago Dollar                                        | TTD           |
| TUNISIA                                                    | Tunisian Dinar                                                    | TND           |
| TURKEY                                                     | Turkish Lira                                                      | TRY           |
| TURKMENISTAN                                               | Turkmenistan New Manat                                            | TMT           |
| TURKS AND CAICOS ISLANDS (THE)                             | US Dollar                                                         | USD           |
| TUVALU                                                     | Australian Dollar                                                 | AUD           |
| UGANDA                                                     | Uganda Shilling                                                   | UGX           |
| UKRAINE                                                    | Hryvnia                                                           | UAH           |
| UNITED ARAB EMIRATES (THE)                                 | UAE Dirham                                                        | AED           |
| UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE) | Pound Sterling                                                    | GBP           |
| UNITED STATES MINOR OUTLYING ISLANDS (THE)                 | US Dollar                                                         | USD           |
| UNITED STATES OF AMERICA (THE)                             | US Dollar                                                         | USD           |
| UNITED STATES OF AMERICA (THE)                             | US Dollar (Next day)                                              | USN           |
| URUGUAY                                                    | Peso Uruguayo                                                     | UYU           |
| URUGUAY                                                    | Uruguay Peso en Unidades Indexadas (UI)                           | UYI           |
| URUGUAY                                                    | Unidad Previsional                                                | UYW           |
| UZBEKISTAN                                                 | Uzbekistan Sum                                                    | UZS           |
| VANUATU                                                    | Vatu                                                              | VUV           |
| VENEZUELA (BOLIVARIAN REPUBLIC OF)                         | Bolívar Soberano                                                  | VES           |
| VIET NAM                                                   | Dong                                                              | VND           |
| VIRGIN ISLANDS (BRITISH)                                   | US Dollar                                                         | USD           |
| VIRGIN ISLANDS (U.S.)                                      | US Dollar                                                         | USD           |
| WALLIS AND FUTUNA                                          | CFP Franc                                                         | XPF           |
| WESTERN SAHARA                                             | Moroccan Dirham                                                   | MAD           |
| YEMEN                                                      | Yemeni Rial                                                       | YER           |
| ZAMBIA                                                     | Zambian Kwacha                                                    | ZMW           |
| ZIMBABWE                                                   | Zimbabwe Dollar                                                   | ZWL           |
| ZZ01_Bond Markets Unit European_EURCO                      | Bond Markets Unit European Composite Unit (EURCO)                 | XBA           |
| ZZ02_Bond Markets Unit European_EMU-6                      | Bond Markets Unit European Monetary Unit (E.M.U.-6)               | XBB           |
| ZZ03_Bond Markets Unit European_EUA-9                      | Bond Markets Unit European Unit of Account 9 (E.U.A.-9)           | XBC           |
| ZZ04_Bond Markets Unit European_EUA-17                     | Bond Markets Unit European Unit of Account 17 (E.U.A.-17)         | XBD           |
| ZZ06_Testing_Code                                          | Codes specifically reserved for testing purposes                  | XTS           |
| ZZ07_No_Currency                                           | The codes assigned for transactions where no currency is involved | XXX           |
| ZZ08_Gold                                                  | Gold                                                              | XAU           |
| ZZ09_Palladium                                             | Palladium                                                         | XPD           |
| ZZ10_Platinum                                              | Platinum                                                          | XPT           |
| ZZ11_Silver                                                | Silver                                                            | XAG           |

## Author

👤 **Jochem Groeneweg**

- Website: https://www.jochemgroeneweg.be/
- Github: [@Jochem-Groeneweg](https://github.com/Jochem-Groeneweg)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/jochem-groeneweg-6121a51bb\/](https://linkedin.com/in/https://www.linkedin.com/in/jochem-groeneweg-6121a51bb/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Jochem-Groeneweg/react-currency-formatter/issues). You can also take a look at the [contributing guide](https://github.com/Jochem-Groeneweg/react-currency-formatter/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Jochem Groeneweg](https://github.com/Jochem-Groeneweg).<br />
This project is [MIT](https://github.com/Jochem-Groeneweg/react-currency-formatter/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
