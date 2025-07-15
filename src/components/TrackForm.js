import React, { useContext } from "react";
import { Input, Button } from "@rneui/themed";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const { state:
    { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

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
    <Spacer />
    {
      !recording && locations.length
        ? <Button title="Save Recording" onPress={saveTrack} />
        : null
    }
  </>);
};

export default TrackForm;