module.exports = function check(str, bracketsConfig) 
{
  // your solution
	var otkritie;
	otkritie=0;
	 for (var i = 0; i < str.length; i++) 
 	{
   		if (str[i]=='(')
   			{
   				otkritie++;
   			}
  		 if(str[i]==')')
   			{
   				if(otkritie>0)
   				otkritie--;
   				else
   				return false;
   			}

 	}
	otkritie=0;
	 for (var i = 0; i < str.length; i++) 
 	{
   		if (str[i]=='[')
   			{
   				otkritie++;
   			}
  		 if(str[i]==']')
   			{
   				if(otkritie>0)
   				otkritie--;
   				else
   				return false;
   			}

 	}

	return true;

  
}
