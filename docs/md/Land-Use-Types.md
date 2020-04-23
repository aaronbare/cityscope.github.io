# CityScope Land-Use "Types"

CS "Types" are the Land-Use building blocks which the end-user can use to design the site. These can be different for each project in order to reflect the land-use programming under consderation. However, the types for each project must conform to the same data format. 

Each type consists of a dictionary of attributes. The mnimum attributes contined in each type are "NAICS" and "LBCS".

## Attribute Examples

A single grid-cell may contain multiple LBCS and multiple NAICS on different floors or even on the same floor. Therefore, the value of each attribute is formatted as a list of lists. The upper-most list represents groups of floors. Each lower-level list represents the mix of uses within that floor-group. For example, the following represents the NAICS attribute for a grid cell where:
- the lower 30% of floors are devoted to a mix of "541310" (architectural services) and "541330" (engineering services).
- the upper 70% of floors and devoted to a mix of "23" (Construction), "42" (Wholesale) and "61" (Education).

```json
{
  "NAICS": [
    {
      "P": 0.3,
      "use": [
        {
          "P": 0.5,
          "use": "541310"
        },
        {
          "P": 0.5,
          "use": "541330"
        }
      ]
    },
    {
      "P": 0.7,
      "use": [
        {
          "P": 0.3,
          "use": "23"
        },
        {
          "P": 0.4,
          "use": "42"
        },
        {
          "P": 0.3,
          "use": "61"
        }
      ]
    }
  ]
}
```

The number of floors is independent of the type and specified separately by the user. Therefore, if the user assigns 10 floors to this grid cell, the lower 2 floors will be a mix of 541310 and 541330 and the upper 10 floors will be a mix of 23, 42 and 61.

In most cases, the type specification will not require such a detailed level of partitioning of types. If for example, the grid cell has only a single usage type, the same data format will be used but the upper and lower level list will have length of 1. For example, the following represents the NAICS attribute for a grid cell solely devoted to "54" (Professional, Scientific and Technical Services).

```json
{
  "NAICS": [
    {
      "P": 1,
      "use": [
        {
          "P": 1,
          "use": "54"
        }
      ]
    }
  ]
}
```


## Type Examples
Below are some examples of CityScope types. These can be copy and pasted or modified for use in different CityScope projects:

### Residential Type (100% detached units)
```json
{
  "NAICS":null,
  "LBCS":
  [
    {
      "P": 1,
      "use": [
        {
          "P": 1,
          "use": "1120"
        }
      ]
    }
  ]
}
```
### Residential Type (detached units) with ground-level grocery store
```json
{
  "NAICS": [
    {
      "P": 0.1,
      "use": [
        {
          "P": 1,
          "use": "4451"
        }
      ]
    },
    {
      "P": 0.9,
      "use": null
    }
  ],
  "LBCS": [
    {
      "P": 0.1,
      "use": [
        {
          "P": 1,
          "use": "2150"
        }
      ]
    },
    {
      "P": 1,
      "use": [
        {
          "P": 1,
          "use": "1120"
        }
      ]
    }
  ]
}
```