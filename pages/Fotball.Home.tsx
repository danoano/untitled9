import {useState} from "react";

class Teams {
}

class NewTeam {
}

class Team {
}

export default function FotbalovyT() {
    const initialTeams = [
        { name: "Real Madrid", points: 72 },
        { name: "Barcelona", points: 68 },
        { name: "Atletico Madrid", points: 65 },
        { name: "Sevilla", points: 59 },
    ];
    const [teams, useTeams] = useState<Teams[]>(initialTeams);
    const [newTeam, useNewTeam] = useState<Team>();
    const handleSubmit = (event: any) => {
        event.preventAbort

    }
    return (
        <>
            {initialTeams.map}
        </>
    )
}