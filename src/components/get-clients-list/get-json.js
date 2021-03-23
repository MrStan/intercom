export async function GetJSON(url) {
  try {
    const response = await (await fetch(url)).json();
    return response;
  }
  catch(error) {
    console.log(error);
  }
}
