import React, { useContext } from "react";
import { Input, Button } from "@rneui/themed";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const { state:
    { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  console.log(locations.length);

  return (<>
    <Input
      placeholder="Enter the name of the track"
      onChangeText={changeName}
      value={name}
    />
    {
      recording
        ? <Button title="Stop The Recording" onPress={stopRecording} />
        : <Button title="Start Recording Your Track" onPress={startRecording} />
    }
  </>);
};

export default TrackForm;