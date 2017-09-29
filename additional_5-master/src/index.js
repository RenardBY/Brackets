module.exports = function check(str, bracketsConfig) 
{
  // your solution
str = str.split('')
let isOneOrMorePairDeleted = false

function deletePairs() 
  {
      isOneOrMorePairDeleted = false
      bracketsConfig.map(pair => {
                                    let len = str.length;
                                    for(let i = 0; i < len; i++) 
                                      {
                                          if (str[i] === pair[0] && str[i+1] === pair[1]) 
                                            {
                                                str.splice(i, 2)
                                                isOneOrMorePairDeleted = true
                                            }
                                      }
                                  })

  }

do {
      deletePairs()
    }
while(str.length > 0 && isOneOrMorePairDeleted === true)

return str.length ? false : true

  
}
