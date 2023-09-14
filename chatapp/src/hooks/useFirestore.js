import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
const useFirestore = (collect, condition) => {
    const [documents, setDocuments] = useState([]);

    React.useEffect(() => {

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                // reset documents data
                setDocuments([]);
                return;
            }
            console.log(collect);

        }
        const p = query(collection(db, collect), where(condition.fieldName, condition.operator, condition.compareValue), orderBy("createdAt"));
        console.log(23);
        console.log(collect);
        const unsubscribe = onSnapshot(p, (querySnapshot) => {
            const documents = [];
            console.log(555);
            querySnapshot.forEach((doc) => {
                console.log(doc);
                documents.push({
                    ...doc.data(),
                    id: doc.id,
                }
                );
            });
            setDocuments(documents)
        });


        return unsubscribe;
    }, [collect, condition]);
    return documents;
};

export default useFirestore;