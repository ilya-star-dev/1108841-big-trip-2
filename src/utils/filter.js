import { FilterType } from '../const.js';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function isPointFuture(point) {
  return dayjs(point.dateFrom).isAfter(dayjs());
}

function isPointPresent(point) {
  const now = dayjs();
  return dayjs(point.dateFrom).isSameOrBefore(now) && dayjs(point.dateTo).isSameOrAfter(now);
}

function isPointPast(point) {
  return dayjs(point.dateTo).isBefore(dayjs());
}

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter(isPointFuture),
  [FilterType.PRESENT]: (points) => points.filter(isPointPresent),
  [FilterType.PAST]: (points) => points.filter(isPointPast),
};

function generateFilters() {
  return {
    [FilterType.EVERYTHING]: true,
    [FilterType.FUTURE]: true,
    [FilterType.PRESENT]: true,
    [FilterType.PAST]: true,
  };
}

export { filter, generateFilters, isPointFuture, isPointPresent, isPointPast };
