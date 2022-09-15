function BeaconFireTable({
    data,
    columnName = [],
    columnValue = [],
    pageSize = -1,
    sortedBy,
    order = -1,
    sx
}) {
    // your code here
    const [page, setPage] = useState(0);
    const pageCount =
        data.length % pageSize === 0
            ? Number(data.length / pageSize)
            : Number((data.length / pageSize).toFixed()) + 1;

    return (
        <>
            {data.length > 0 ? (
                <table style={sx}>
                    <thead>
                        <tr>
                            {columnName.length > 0
                                ? columnName.map((item) => (
                                      <th key={item}>{item}</th>
                                  ))
                                : Object.keys(data[0]).map((item) => (
                                      <th key={item}>{item}</th>
                                  ))}
                        </tr>
                    </thead>

                    <tbody>
                        {data
                            .sort((a, b) => {
                                if (sortedBy) {
                                    return (
                                        a[sortedBy].localeCompare(b[sortedBy]) *
                                        order
                                    );
                                } else return 0;
                            })
                            .slice(
                                pageSize === -1 ? 0 : pageSize * page,
                                pageSize === -1
                                    ? data.length
                                    : Math.min(
                                          (page + 1) * pageSize,
                                          data.length
                                      )
                            )
                            .map((item, index) => {
                                if (columnValue.length != 0) {
                                    return (
                                        <tr key={index}>
                                            {columnValue.map(
                                                (subItem, subIndex) => (
                                                    <td>{item[subItem]}</td>
                                                )
                                            )}
                                        </tr>
                                    );
                                } else {
                                    return (
                                        <tr key={index}>
                                            {Object.keys(item).map(
                                                (subItem) => (
                                                    <td>{item[subItem]}</td>
                                                )
                                            )}
                                        </tr>
                                    );
                                }
                            })}
                    </tbody>

                    <tfoot>
                        {pageSize != -1 && (
                            <tr>
                                <td>{`Total page: ${pageCount}`}</td>
                                <td>
                                    {Array.from(
                                        { length: pageCount },
                                        (_, index) => index + 1
                                    ).map((item) => (
                                        <button
                                            style={{
                                                background:
                                                    page + 1 == item
                                                        ? "red"
                                                        : "white"
                                            }}
                                            onClick={() => setPage(item - 1)}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </td>
                            </tr>
                        )}
                    </tfoot>
                </table>
            ) : (
                <p>No data</p>
            )}
        </>
    );
}