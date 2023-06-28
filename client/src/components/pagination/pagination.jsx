import style from "./pagination.module.css"

const Paginado = ({ pokemons, page, viewPage, paginado }) => {
    const pageNum = [];
    const all = Math.ceil(pokemons / viewPage);// calcula el número total de páginas dividiendo la cantidad total de poke y redondeando hacia arriba.

    for (let i = 1; i <= all; i++) {
        pageNum.push(i)
    }
    let startPage = page - 13;
    let endPage = page + 12;

    if (startPage < 1) {
        endPage += Math.abs(startPage) + 1;
        startPage = 1;
    }
    if (endPage > all) {
        startPage -= endPage - all;
        endPage = all;
    }

    const pages = pageNum.slice(startPage - 1, endPage);

    return (
        <div className={style.Pages}>
            {all > 1 && (
                <div>
                    <button onClick={page > 1 ? () => paginado(page - 1)
                        : null}
                        disabled={page === 1 ? true
                            : false}>Prev</button>
                    {pages.length > 0 && pages.map(pag => {
                        return (
                            <button 
                            className={page === pag ? style.selectedPage : ""}
                                key={pag}
                                onClick={() => paginado(pag)}
                                disabled={page === pag ? true : false}
                                
                                >
                                {pag}
                                </button>
                        )
                    })}
                    <button className={style.NP} onClick={page < all ? () => paginado(page + 1) : null}
                        disabled={page === all ? true
                            : false}>Next</button>
                </div>
            )}
        </div>
    )
}

export default Paginado;