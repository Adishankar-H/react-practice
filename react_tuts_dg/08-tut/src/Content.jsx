import ItemList from "./ItemList"

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length < 0 ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>No items left...</p>
            )}
        </main>
    )
}

export default Content