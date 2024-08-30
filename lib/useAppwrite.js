import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isloading, setisLoading] = useState(true);

  const fetchdata = async () => {
    setisLoading(true);

    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const refetch = () => fetchdata();
  return { data, isloading, refetch };
};

export default useAppwrite;
