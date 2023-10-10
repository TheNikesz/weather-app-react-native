import Icon from "@svgr-iconkit/weather-icons";

export default function getWeatherIcon(
  style: React.CSSProperties,
  isNight: boolean,
  weatherCode: number
): React.JSX.Element {
  if (isNight) {
    switch (weatherCode) {
      case 0:
        return <Icon style={style} name="night-clear" />;
      case 1:
      case 2:
      case 3:
        return <Icon style={style} name="night-alt-cloudy" />;
      case 45:
      case 48:
        return <Icon style={style} name="night-fog" />;
      case 51:
      case 53:
      case 55:
      case 80:
      case 81:
      case 82:
        return <Icon style={style} name="night-alt-showers" />;
      case 56:
      case 57:
        return <Icon style={style} name="night-alt-rain-mix" />;
      case 61:
      case 63:
      case 65:
        return <Icon style={style} name="night-alt-rain" />;
      case 66:
      case 67:
        return <Icon style={style} name="night-alt-sleet" />;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return <Icon style={style} name="night-alt-snow" />;
      case 95:
        return <Icon style={style} name="night-alt-thunderstorm" />;
      case 96:
      case 99:
        return <Icon style={style} name="night-alt-snow-thunderstorm" />;
      default:
        return <Icon style={style} name="na" />;
    }
  }

  switch (weatherCode) {
    case 0:
      return <Icon style={style} name="day-sunny" />;
    case 1:
    case 2:
    case 3:
      return <Icon style={style} name="day-cloudy" />;
    case 45:
    case 48:
      return <Icon style={style} name="day-fog" />;
    case 51:
    case 53:
    case 55:
    case 80:
    case 81:
    case 82:
      return <Icon style={style} name="day-showers" />;
    case 56:
    case 57:
      return <Icon style={style} name="day-rain-mix" />;
    case 61:
    case 63:
    case 65:
      return <Icon style={style} name="day-rain" />;
    case 66:
    case 67:
      return <Icon style={style} name="day-sleet" />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <Icon style={style} name="day-snow" />;
    case 95:
      return <Icon style={style} name="day-thunderstorm" />;
    case 96:
    case 99:
      return <Icon style={style} name="day-snow-thunderstorm" />;
    default:
      return <Icon style={style} name="na" />;
  }
}
