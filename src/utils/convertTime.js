import { format } from 'date-fns';

export const convertTime = (timeToConvert) => {
  
  return format(new Date(timeToConvert),"dd MMM yyyy")
  
}