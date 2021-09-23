# randomNumber
With this function the user can generate random numbers. The number range is freely selectable. Furthermore, the output can be controlled via arguments. 

## Arguments (optinal)
- min : int
- max : int 
- quanty: int
- sort: string (up|down);
- uniqe: bool (false|true); 

## Arguments default
- min : 0
- max : 99 
- quanty: 1
- sort: null;
- uniqe: true; 

## Example Execute
```` 
randomNum({ quanty: 33, sort:'up', uniqe: true, max:50 });
```` 
## Example Output
```` 
{
    "error": false,
    "numbers": {
    "selected":[45,10,47,1,...3,8],
    "notSelected": [4,7,11,...34,35,38,41]
    },
    "runs": 56
}
```` 


