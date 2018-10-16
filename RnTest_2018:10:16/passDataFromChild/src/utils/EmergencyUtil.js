import moment from 'moment';
import { Colors } from '../themes';
import { translate } from '../utils/locale';

export function formatDate(time) {
  const timeDiffMinutes = moment().diff(moment(time), 'minutes');
  const timeDiffHours = moment().diff(moment(time), 'hours');
  if (timeDiffMinutes < 1) {
    return translate('STR_JUST_NOW');
  }
  if (timeDiffMinutes < 2) {
    return `${timeDiffMinutes} ${translate('STR_MINUTE_AGO_LOWER')}`;
  }
  if (timeDiffMinutes < 60) {
    return `${timeDiffMinutes} ${translate('STR_MINUTES_AGO_LOWER')}`;
  }

  if (timeDiffHours < 2) {
    return `${timeDiffHours} ${translate('STR_HOUR_AGO_LOWER')}`;
  }
  if (timeDiffHours < 24) {
    return `${timeDiffHours} ${translate('STR_HOURS_AGO_LOWER')}`;
  }

  return moment(time).format('hh:mm DD/MM/YY');
}

export function parseAddress(address) {
  if (!address) {
    return null;
  }
  const strArr = address.split(',');
  const addressData = {
    first: strArr[0].trim(),
    second: address.substring(strArr[0].length + 1, address.length).trim()
  };
  return addressData;
}

export function distanceOfTwoPoint(lat1, lon1, lat2, lon2) {
  if (!lat1 && !lon1) {
    return null;
  }
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d.toFixed(2);
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export function getStatusColor(type) {
  switch (type) {
    case '_OPEN':
      return Colors.blurRed;
    case '_INPROGRESS':
      return Colors.blurYellow;
    case '_CLOSED':
      return Colors.warmGrey;
    case '_EXPIRED':
      return Colors.warmGrey;
    case '_RESOLVED':
      return Colors.blurGreen;
    case '_CANCELLED':
      return Colors.warmGrey;
    default:
      return Colors.warmGrey;
  }
}

export function getFormatStatusData(type) {
  switch (type) {
    case '_OPEN':
      return {
        text: translate('STR_EMERGENCY_STATUS_OPENING'),
        color: Colors.blurRed
      };
    case '_INPROGRESS':
      return {
        text: translate('STR_EMERGENCY_STATUS_IN_PROGRESS'),
        color: Colors.blurYellow
      };
    case '_CLOSED':
      return {
        text: translate('STR_EMERGENCY_STATUS_CLOSED'),
        color: Colors.warmGrey
      };
    case '_EXPIRED':
      return {
        text: translate('STR_EMERGENCY_STATUS_EXPIRED'),
        color: Colors.warmGrey
      };
    case '_RESOLVED':
      return {
        text: translate('STR_EMERGENCY_STATUS_RESOLVED'),
        color: Colors.blurGreen
      };
    case '_CANCELLED':
      return {
        text: translate('STR_EMERGENCY_STATUS_CANCELED'),
        color: Colors.warmGrey
      };
    default:
      return { text: '', color: Colors.warmGrey };
  }
}

export function makeIcon(type, data, language) {
  const validData = !!data[type];
  let emergencyName = translate('STR_INVALID_EMERGENCY_DATA');
  if (validData) {
    emergencyName = language === 'vi' ? data[type].vi : data[type].en;
  }

  return {
    emergencyType: type,
    iconName: validData ? data[type].iconName : null,
    backgroundColor: validData ? data[type].iconBackgroundColor : Colors.snow,
    emergencyName
  };
}

export function getTrustWorthyPercentColor(percent) {
  if (percent < 50) {
    return Colors.blurRed;
  } else if (percent < 80) {
    return Colors.blurYellow;
  } else if (percent <= 100) {
    return Colors.blurGreen;
  }
  return Colors.warmGrey;
}
