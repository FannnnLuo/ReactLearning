function App() {
    let heros = [
        {
            name: "Superman",
            alias: "Clark Kent",
            job: "Reporter for Daily Planet"
        },
        {
            name: "Batman",
            alias: "Bruce Wayne",
            job: "Chairman of Wayne Industries"
        },
        {
            name: "Wonderwoman",
            alias: "Princess Diana",
            job: "Princess of Themyscira"
        }
    ];

    let atla = [
        {
            name: "Prince Zuko",
            nation: "Fire Nation",
            skill: "Firebending",
            secondary: "Swordsman"
        },
        {
            name: "Katara",
            nation: "Southern Water Tribe",
            skill: "Waterbending",
            secondary: "Healing"
        },
        {
            name: "Toph Beifong",
            nation: "Earth Kingdom",
            skill: "Earthbending",
            secondary: "Metalbending"
        },
        {
            name: "Aang",
            nation: "Air Nomad",
            skill: "Avatar",
            secondary: "Airbending"
        },
        {
            name: "Sokka",
            nation: "Southern Water Tribe",
            skill: "Swordsman",
            secondary: "Strategist"
        },
        {
            name: "Princess Azula",
            nation: "Fire Nation",
            skill: "Firebending",
            secondary: "Lightning"
        }
    ];

    return (
        <div>
            <h2>Heros</h2>
            <BeaconFireTable data={heros} />
            <h2>The Last Airbender</h2>
            <BeaconFireTable
                data={atla}
                columnName={["Name", "Nation"]}
                columnValue={["name", "nation"]}
                pageSize={3}
                sortedBy="name"
                order={1}
                sx={{ border: "1px solid black" }}
            />
        </div>
    );
}