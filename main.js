const btn = document.querySelector('button')
btn.addEventListener('click', async (e) => {
    e.preventDefault()
    const ArrayYandR = getYearAndRound()
    const year = ArrayYandR[0]
    const round = ArrayYandR[1]
    const outputObject = await resultCall(year,round)
    displayToUser(outputObject)
})



function getYearAndRound(){
    const yearInput = document.querySelector('#year-input').value
    const getRound = document.querySelector('#round-input').value
    const yearAndRound = [yearInput,getRound]
    return yearAndRound

}

async function resultCall(year,round) {
//https://ergast.com/api/f1/<year>/<round>/driverStandings.json?authuser=0
    const res = await fetch(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json?authuser=0`)
    if(res.ok){
        const data = await res.json()
        const row1 = {
          position :data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position,
          firstName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName,
          lastName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName,
          nationality: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality,
          sponsor: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name,
          points: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points
        }
        const row2 = {
            position :data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position,
            firstName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName,
            lastName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName,
            nationality: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality,
            sponsor: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name,
            points: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points
          }
          const row3 = {
            position :data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position,
            firstName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName,
            lastName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName,
            nationality: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality,
            sponsor: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name,
            points: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points
          }
          const row4 = {
            position :data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position,
            firstName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName,
            lastName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName,
            nationality: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality,
            sponsor: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name,
            points: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points
          }
          const row5 = {
            position :data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position,
            firstName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName,
            lastName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName,
            nationality: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality,
            sponsor: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name,
            points: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points
          }
          const row6 = {
            position :data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position,
            firstName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName,
            lastName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName,
            nationality: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality,
            sponsor: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name,
            points: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points
          }
          const row7 = {
            position :data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position,
            firstName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName,
            lastName: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName,
            nationality: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality,
            sponsor: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name,
            points: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points
          }
        const output = {row1,row2,row3,row4,row5,row6,row7}
        return output
        
        
    } else window.alert('Year Or Round Input Is Invalid')
}

function displayToUser (outputObject) {
    const onePosition = document.querySelector("#one-position")
    onePosition.innerText = outputObject.row1.position
    const twoPosition = document.querySelector("#two-position")
    twoPosition.innerText = outputObject.row2.position
    const threePosition = document.querySelector("#three-position")
    threePosition.innerText = outputObject.row3.position
    const fourPosition = document.querySelector("#four-position")
    fourPosition.innerText = outputObject.row4.position
    const fivePosition = document.querySelector("#five-position")
    fivePosition.innerText = outputObject.row5.position
    const sixPosition = document.querySelector("#six-position")
    sixPosition.innerText = outputObject.row6.position
    const sevenPosition = document.querySelector("#seven-position")
    sevenPosition.innerText = outputObject.row7.position

    const oneName = document.querySelector("#one-name")
    oneName.innerText = outputObject.row1.firstName + ' ' + outputObject.row1.lastName
    const twoName = document.querySelector("#two-name")
    twoName.innerText = outputObject.row2.firstName + ' ' + outputObject.row2.lastName
    const threeName = document.querySelector("#three-name")
    threeName.innerText = outputObject.row3.firstName + ' ' + outputObject.row3.lastName
    const fourName = document.querySelector("#four-name")
    fourName.innerText = outputObject.row4.firstName + ' ' + outputObject.row4.lastName
    const fiveName = document.querySelector("#five-name")
    fiveName.innerText = outputObject.row5.firstName + ' ' + outputObject.row5.lastName
    const sixName = document.querySelector("#six-name")
    sixName.innerText = outputObject.row6.firstName + ' ' + outputObject.row6.lastName
    const sevenName = document.querySelector("#seven-name")
    sevenName.innerText = outputObject.row7.firstName + ' ' + outputObject.row7.lastName

    const oneNationality = document.querySelector("#one-nationality")
    oneNationality.innerText = outputObject.row1.nationality
    const twoNationality = document.querySelector("#two-nationality")
    twoNationality.innerText = outputObject.row2.nationality
    const threeNationality = document.querySelector("#three-nationality")
    threeNationality.innerText = outputObject.row3.nationality
    const fourNationality = document.querySelector("#four-nationality")
    fourNationality.innerText = outputObject.row4.nationality
    const fiveNationality = document.querySelector("#five-nationality")
    fiveNationality.innerText = outputObject.row5.nationality
    const sixNationality = document.querySelector("#six-nationality")
    sixNationality.innerText = outputObject.row6.nationality
    const sevenNationality = document.querySelector("#seven-nationality")
    sevenNationality.innerText = outputObject.row7.nationality

    const oneSponsor = document.querySelector("#one-sponsor")
    oneSponsor.innerText = outputObject.row1.sponsor
    const twoSponsor = document.querySelector("#two-sponsor")
    twoSponsor.innerText = outputObject.row2.sponsor
    const threeSponsor = document.querySelector("#three-sponsor")
    threeSponsor.innerText = outputObject.row3.sponsor
    const fourSponsor = document.querySelector("#four-sponsor")
    fourSponsor.innerText = outputObject.row4.sponsor
    const fiveSponsor = document.querySelector("#five-sponsor")
    fiveSponsor.innerText = outputObject.row5.sponsor
    const sixSponsor = document.querySelector("#six-sponsor")
    sixSponsor.innerText = outputObject.row6.sponsor
    const sevenSponsor = document.querySelector("#seven-sponsor")
    sevenSponsor.innerText = outputObject.row7.sponsor

    const onePoints = document.querySelector("#one-points")
    onePoints.innerText = outputObject.row1.points
    const twoPoints = document.querySelector("#two-points")
    twoPoints.innerText = outputObject.row2.points
    const threePoints = document.querySelector("#three-points")
    threePoints.innerText = outputObject.row3.points
    const fourPoints = document.querySelector("#four-points")
    fourPoints.innerText = outputObject.row4.points
    const fivePoints = document.querySelector("#five-points")
    fivePoints.innerText = outputObject.row5.points
    const sixPoints = document.querySelector("#six-points")
    sixPoints.innerText = outputObject.row6.points
    const sevenPoints = document.querySelector("#seven-points")
    sevenPoints.innerText = outputObject.row7.points

}

