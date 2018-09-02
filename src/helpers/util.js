export function friendlyDate(date) {
  let dateObj = typeof dateStr === 'object' ? date : new Date(date)
  let time = dateObj.getTime();
  let now = Date.now();
  let space = now - time
  let str = '';

  switch (true) {
    case  space < 1000 * 60:
      str = "刚刚"
      break;
    case space < 1000 * 3600:
      str = (Math.floor((space) / (1000 * 60)) > 1 ) ? Math.floor((space) / (1000 * 60)) + ' mins ago' 
          : Math.floor((space) / (1000 * 60)) + ' min ago' 
          break
    case space < 1000 * 3600 * 24:
      str = (Math.floor(space / (1000 * 3600)) > 1) ? Math.floor(space / (1000 * 3600)) + " hours ago" 
          : Math.floor(space / (1000 * 3600)) + " hour ago"
          break
    default:
      str = (Math.floor(space / (1000 * 3600 * 24)) > 1) ? Math.floor(space / (1000 * 3600 * 24)) + " days ago"
          : Math.floor(space / (1000 * 3600 * 24)) + " day ago"
      break
  }
  return str;
}
