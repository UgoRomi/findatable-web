import { format, add } from 'date-fns';
import { RestaurantResponse } from './types';

export const checkAvailability = async (numberOfSeats: number) => {
  const today = new Date();
  const formattedFrom = format(today, 'yyyy-M-dd');

  const to = add(today, { months: 7 });
  const formattedTo = format(to, 'yyyy-M-dd');

  console.log(`Checking availability from ${formattedFrom} to ${formattedTo}`);

  const url = `https://api.rsvp-popup.com/api/public/restaurants/2906/availability?seats=${numberOfSeats}&from=${formattedFrom}&to=${formattedTo}`;
  console.log(`calling ${url}`);
  const body: RestaurantResponse[] = (await (
    await fetch(url)
  ).json()) as RestaurantResponse[];
  const availableDays = body.filter((day) => day.Status === 'AVAILABLE');
  console.log(`Found ${availableDays.length} available days`);

  if (availableDays.length > 0) {
    let emailSubject = '';
    for (const availableDay of availableDays) {
      emailSubject += `${new Date(availableDay.Date).toLocaleDateString(
        'it-IT'
      )} `;
    }
  }
  console.log('done');
};
