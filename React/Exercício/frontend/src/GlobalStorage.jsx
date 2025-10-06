import React from "react";
import GlobalContext from "./GlobalContext";

export const GlobalStorage = ({children}) => {
    const [produto, setProduto] = React.useState(null);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
        .then((res) => res.json())
        .then((json) => setProduto(json))
    }, []);

    return (
        <GlobalContext.Provider value={{produto}}>
            {children}
        </GlobalContext.Provider>
    )
}