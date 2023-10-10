export default class Weather {
  city: string;
  date: string;
  weatherCode: number;
  minTemperature: number;
  maxTemperature: number;

  constructor(
    city: string,
    date: string,
    weatherCode: number,
    minTemperature: number,
    maxTemperature: number
  ) {
    this.city = city;
    this.date = date;
    this.weatherCode = weatherCode;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
  }
}
