const Filters = () => {
    return <form>
        <div>
            <label>Price Range</label>
            <input type="range" min={0} max={120} step={5} />
        </div>
        <div>
            <label>By age</label>
            <input type="checkbok" />
        </div>
        <div>
            <label>Hardware</label>
            <input type="checkbok" />
        </div>
        <div>
            <label>Franchise</label>
            <input type="checkbok" />
        </div>
        <div>
            <label>Gender</label>
            <input type="checkbok" />
        </div>
    </form>
}

//Formik