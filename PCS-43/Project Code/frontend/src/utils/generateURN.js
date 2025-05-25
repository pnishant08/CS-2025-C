export default function GenerateURN() {
  const date = new Date();
  const year = date.getFullYear().toString().substr(-2);
  const dayOfYear = Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  )
    .toString()
    .padStart(3, "0");
  const milliseconds = date.getMilliseconds().toString().padStart(3, "0");

  let randomNumber = "";
  while (randomNumber.length < 7) {
    const newDigits = Math.floor(Math.random() * 900000) + 100000;
    randomNumber += newDigits.toString();
    const potentialCollision = GenerateURN.recentlyGeneratedURNs.find(
      (urnObject) => {
        const urnSuffix = urnObject.urn.substr(-7); 
        return (
          urnSuffix === randomNumber &&
          urnObject.generatedAt > date.getTime() - 10000
        );
      }
    );
    if (potentialCollision) {
      randomNumber = "";
    }
  }
  GenerateURN.recentlyGeneratedURNs.push({
    urn: year + dayOfYear + milliseconds + randomNumber,
    generatedAt: date.getTime(),
  });

  GenerateURN.recentlyGeneratedURNs =
    GenerateURN.recentlyGeneratedURNs.splice(-100);

  return year + dayOfYear + milliseconds + randomNumber;
}

GenerateURN.recentlyGeneratedURNs = [];
