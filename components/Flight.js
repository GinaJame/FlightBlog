import InformationContainer from "./InformationContainer"
export default function Flight({departureTime, arrivalTime, date, destination, origin}){
    return (
        <>
            <InformationContainer
                icon="flight"
                upperDescription={}
                lowerDescription={}
            />
        </>
    )
}