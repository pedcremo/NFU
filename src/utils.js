import CryptoJS from "crypto-js";

const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))

let generateGravatar = (email) => {
  var md5Hash = CryptoJS.MD5(email);
  let url_image = "https://www.gravatar.com/avatar/" + md5Hash;
  return url_image;
}

let imageLocal = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+9vsC6u73k5OXT1NX7+/u3uLu+v8H5+fnW19jIycvP0NH09PXp6erx8fHFxsjd3d7m5ufs9xf2AAAEjklEQVR4nO2dadOrIAxG6wLWnf7/P3ux2ta+3RQSE73P+drpDGcCBJDldAIAAAAAAAAAAAAAAAAAAAAAAADAM6ZrM1eWeVm6rO2MdHGI6VyV2HSOTSrXSheLiHNWebnkFa/Zu7N08aK5eL03dndL22fSRYzBlG+D9zeU+V4DafKv4ZsHst6lo1voNzqW0sVdTZss9xvr6kW6yOuo7Sq/q2O1oxzZrQzgLYy7SZBufQBH9tIa65AATmGspAu/hCpc0Cv20sX/TR8j6BUL7f1NpKBHuWK8oFeUlvhGVBu8obktlhSCXrGWFvlEG5oHXxSdtMp7zlSCPvU30jJv6ckElfY2jqYRjqS5tM4rhHV0wHbSQi9UpIJJoi5lkPWjN1JtK1QFsaBHWumZlrKbGVEWRMpMcUdaak5HH0IfRE1rUzWDoKru1FB3pCOKxm6kw5kHqZ6FKZZ+JlE0OiUesD1QU00znkqqaJ4YsUD6Ay3Lp2yCSSqtNsLWDL2hjjkUw5j0bqhjbMqUDa+GOjIiX0ejpavhyvcDOnI+o2BipeWuMFbSxKr4TMOXLHxXo2EbCtPUaTLUMDJlTPgw3Ijj19Lj9zT/QbZgFFSS8Y8/ajv+yJtz9qTjQ+nxZ8DN4VcxGNOFjq6U67vMgJZvM8dfEWYbe2tphow5X1rszvG/rjFVU027hqi3C41o6UkHWIY1SgY0EwwbhrR8eJpgSIlqkuEEfRB1hfB0ulAHUVsI6bO+jtn9HOI5lKZceIPoKMKIzgMJlJ2Ntm5mhLCeaqyjA2RJUdGQ+w9E64qaz1lSHF3TmChmkPQ2Kr5VfMLEK+r43PSZaEXtgp4i6qRzoV8w6iCp5uOjc8rgGwdUjtXeEbioYVUtW3zHBCTGtN9DE3yQLbhd6MnPqpvx/sLka1qjrVWn+Q803y/BmvtVSucSP2nqBY6prffqN2Bc8bVB+h/3f2VbVxYfb6Qryj2Hb8b5kvfTpYJXs+u1gkWeqdi0RkfTZi6vB3KXtQeTAwAAAAAA+8I0XXvJ5rTd7mdPnqa7uLKuitQ+X1s+zTJs0ufusst5lPFmdZ/a27zp20x4uqZ9NwE1XZZXo9rPZYznSXFaO/XR7Fw9zOqD1/b9Xyu1k2PTln2M3MNS5QLHaBctd5dME02SJqsoQvdX0hY6VsJNtnjtN0AyF2+SLZ/e5Ci6In5e8r5DNLaXcuyWrNrTOFYSdbXrOU8AvzhuflBvW79k8/chTMDzDvGOG74Pseb9EUrFrd6HaGi2r4WwzfsQwc9XULDFvkXOo9tLFLlfFjBRm7poYJ0ln+X9eDf3NRoEE8YdqCoiOMC2i5jjhFoQXD0qyfscNPDs5me8/2I9HCcyWO+DCoDekOesbzD09ZT8aYBYLHVWVBZC+uNtjFe0hEJ8Sxbp6UIaiM/Rqkn2M0hHNqwX64VCeqE5y/MOsZBeukB+GJ0C0pTIdo1QDKR3ncFQBBjCEIbywBCGMJQHhjCEoTwwhCEM5YEhDGEoDwxhCEN5YAhDGMoDQxjCUB4YwhCG8sAQhjCUB4YwhKE8MPx/DP8BTJJaKwTBcYoAAAAASUVORK5CYII=';

let validateMimetype = (file) => {
  let result = false;
  switch (file.type) {
    case 'image/png':
      result = true;
      break;
    case 'image/jpeg':
      result = true;
      break;
    case 'image/jpg':
      result = true;
      break;
  }
  return result;
}

let validateImgSize = (file) => {
  var FileSize = file.size / 1024 / 1024; // in MiB
  if (FileSize > 2) {
      return false;
  } else {
      return true;
  }
}

export {toDataURL,generateGravatar, imageLocal, validateImgSize, validateMimetype}

