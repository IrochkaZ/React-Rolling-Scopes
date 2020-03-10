import React from 'react';
import './style.css';

export default function TableHead(props) {
    const {data, onSetDataSort} = props;

    return (
        <thead>
        <tr>
            {(data.length > 0)
                ? Object.keys(data[0]).map((key, index) => <th
                        data-sort="dec"
                        key={index}
                        onClick={e => {
                            let key = e.target.childNodes[0].data;

                            if (e.target.dataset.sort === 'dec') {
                                e.target.childNodes[1].data = '⮬';
                                e.target.dataset.sort = "inc";

                                onSetDataSort(data.slice(0).sort((a, b) => {
                                    if (key === 'address') {
                                        if (a[key]['zip'] < b[key]['zip'])
                                            return -1;
                                        if (a[key]['zip'] > b[key]['zip'])
                                            return 1;
                                    }

                                    if (a[key] < b[key])
                                        return -1;
                                    if (a[key] > b[key])
                                        return 1;

                                    return 0;
                                }))
                            } else {
                                e.target.childNodes[1].data = '⮮';
                                e.target.dataset.sort = "dec";

                                onSetDataSort(data.slice(0).sort((a, b) => {
                                    if (key === 'address') {
                                        if (a[key]['zip'] < b[key]['zip'])
                                            return 1;
                                        if (a[key]['zip'] > b[key]['zip'])
                                            return -1;
                                    }

                                    if (a.id < b.id)
                                        return 1;
                                    if (a.id > b.id)
                                        return -1;

                                    return 0;
                                }))
                            }
                        }}>{key} ⮮</th>)
                : null}
        </tr>
        </thead>
    );
}