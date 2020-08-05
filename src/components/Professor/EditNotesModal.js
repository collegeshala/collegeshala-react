import React, { useState } from "react";
import axios from "axios";

/* import upload from "./../../js/upload"; */
import { getToken } from "./../../js/auth";

class EditNotesModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  async componentDidMount() {
    const token = await getToken();
    // console.log({ idToken: token });

    axios({
      method: "POST",
      url: "https://api.collegeshala.com/getnotebyid/",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({
        noteId: this.props.selectedNote,
      }),
    })
      .then(({ data }) => {
        console.log(data.Item);
        alert("Details updated successfully!");
        /* this.componentDidMount(); */
      })
      .catch((err) => console.error(err));
  }
  render() {
    console.log("hi")
    return (
      <div>
        <h1>Richard</h1>
      </div>
      
    );
  }
}

/* EditNotesModal = (props) => {
  console.log(props.selectedNote);
  const [details, setDetails] = useState([]);
  let [responseData, setResponseData] = React.useState("");
  const fetchData = React.useCallback(async () => {
    const token = await getToken();
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/getnotebyid/",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({
        noteId: props.selectedNote,
      }),
    })
      .then((response) => {
        /* console.log(response.data.Item); */
       /* setResponseData(response.data.Item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(responseData);
  console.log(responseData.chaptername);
}; */

export default EditNotesModal;
