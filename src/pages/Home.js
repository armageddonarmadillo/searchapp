import styles from '../styles/styles'

const Home = () => {
    return(
        <div style={styles.backdrop}>
            <div style={styles.pagetitle}>Home</div>
            <br/>
            <div style={styles.searchbox}>
                <input 
                    type='text' 
                    name='search' 
                    placeholder='Search for a user...' 
                />
                <button name='search'>Search</button>
            </div>
        </div>
    )
}

export default Home