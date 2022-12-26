import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { defaultUser } from "defaultUser";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extract_local_user";
import { isGithubUser } from "utils/typeGuards";

const BASE_URL = "https://api.github.com/users/";

function App() {
    const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
    const getUser = async (userName: string) => {
		const url = BASE_URL + userName;
		const res = await fetch(url);
		const user = await res.json() as GithubUser | GithubError;

		if( isGithubUser(user)){
			setUser(extractLocalUser(user));
		} else {
			setUser(null);
		}
	};

    return (
        <Container>
            <Header />
            <Search hasError={!user} onSubmit={getUser} />
            {user && <UserCard {...user} />}
        </Container>
    );
}

export default App;
