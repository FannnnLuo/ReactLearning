[toc]

# ReactLearning

Copyright: BeaconFire Inc.



## 1. Reusable Table

Props

| Name        | Type    | Required? | Description                                                  |
| ----------- | ------- | --------- | ------------------------------------------------------------ |
| data        | array   | Yes       | data to display                                              |
| columnName  | array   | No        | table row name, if empty, use the attribute name             |
| columnValue | array   | No        | selected object attribute to display, if empty, display all the object's attributes |
| pageSize    | number  | No        | page size                                                    |
| sortedBy    | string  | No        | rows should be sorted by the attribute                       |
| order       | 1 \| -1 | No        | Descending: -1; ascending: 1                                 |
| sx          | Object  | No        | Customized styling                                           |

