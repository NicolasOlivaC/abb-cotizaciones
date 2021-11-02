
const motorForm3 = props => {

    console.log("rendericé motorForm3")
    
    return (
        <div className="formContainer3 mt-1 border py-3 px-3 bg-light ">

            <h5>Indicar posible pregunta de funcionalidad</h5>
            <div className="formContainer3_1">
                <form className="formContainer3_1_1">
                    <div className="form-group">
                        <h5>Indique si necesita saber funcionalidades adicionales.</h5>
                        <textarea className="form-control mt-2 inputFunc" id="exampleFormControlTextarea1"></textarea>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default motorForm3
