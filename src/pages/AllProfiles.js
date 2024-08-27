

export const AllProfiles = () => {
    return (<>
        <div className="container">
            <div className="alert alert-info w-50 mx-auto my-3">

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Mobile No.</th>
                            <th scope="col">Email-id</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <button className="btn btn-info">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>

    </>)
}


