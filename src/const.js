const DEFAULT_ERROR_MESSAGE = 'Failed to load latest route information';
const DEFAULT_POINT = {
  id: null,
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: '',
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const RoutePointCount = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3
};

const PointTypes = {
  ITEMS: [
    'taxi',
    'bus',
    'train',
    'ship',
    'drive',
    'flight',
    'check-in',
    'sightseeing',
    'restaurant',
  ]
};
const TimeConfig = {
  MINUTES_IN_HOUR: 60,
  MINUTES_IN_DAY: 60 * 24,
  HOURS_IN_DAY: 24
};
const IdConfig = {
  RADIX: 36,
  LENGTH: 2
};
const PriceConfig = {
  DEFAULT: 0,
  MIN: 1
};
const DateFormat = {
  MONTH: 'MONTH',
  DAY: 'DAY',
  HOURS_MINUTES: 'HOURS_MINUTES',
  FULL: 'FULL',
  DATE_PICKER: 'd/m/y H:i',
  DATE_DISPLAY: 'DD/MM/YY HH:mm',
  TRIP_INFO: 'DD MMM',
};
const DurationLabel = {
  DAY: 'D',
  HOUR: 'H',
  MINUTE: 'M',
};
const TimeUnit = {
  MINUTE: 'minute',
};
const PointIconSize = {
  SMALL: 17,
  MEDIUM: 28,
  LARGE: 42,
};
const ApiConfig = {
  BASE_URL: 'https://22.objects.htmlacademy.pro/big-trip',
  ENDPOINTS: {
    POINTS: 'points',
    DESTINATIONS: 'destinations',
    OFFERS: 'offers'
  },
  CONTENT_TYPE: 'application/json',
  UPDATING_POINT: 'Не удалось обновить точку маршрута',
  ADDING_POINT: 'Не удалось добавить точку маршрута',
  DELETING_POINT: 'Не удалось удалить точку маршрута'
};
const ApiErrorMessage = {
  DELETE: 'Failed to delete point. Please try again.',
  PUT: 'Failed to update point. Please try again.',
  POST: 'Failed to create point. Please try again.',
  GET: 'Failed to load latest route information'
};
const SortLabel = {
  DAY: 'Day',
  EVENT: 'Event',
  TIME: 'Time',
  PRICE: 'Price',
  OFFER: 'Offers',
};
const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};
const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer'
};
const SortTypeEnabled = {
  [SortType.DAY]: true,
  [SortType.EVENT]: false,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.OFFER]: false
};
const EmptyListTexts = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now',
};
const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};
const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  FORCE: 'FORCE',
  INIT: 'INIT',
  ERROR: 'ERROR',
};
const ButtonText = {
  SAVE: 'Save',
  SAVING: 'Saving...',
  DELETE: 'Delete',
  DELETING: 'Deleting...',
  LOADING: 'Loading...'
};
const ArrayConfig = {
  EMPTY_LENGTH: 0,
  FIRST_INDEX: 0,
  SECOND_INDEX: 1,
  THIRD_INDEX: 2
};
const TokenConfig = {
  CHARACTERS: 'abcdefghijklmnopqrstuvwxyz0123456789',
  LENGTH: 12
};

export {
  PointTypes,
  DateFormat,
  DurationLabel,
  TimeUnit,
  TimeConfig,
  FilterType,
  EmptyListTexts,
  SortType,
  SortTypeEnabled,
  UserAction,
  UpdateType,
  IdConfig,
  PointIconSize,
  PriceConfig,
  DEFAULT_ERROR_MESSAGE,
  SortLabel,
  ApiConfig,
  ApiErrorMessage,
  ButtonText,
  ArrayConfig,
  TokenConfig,
  DEFAULT_POINT,
  RoutePointCount
};
