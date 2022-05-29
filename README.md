
# Custom-Select
Custom Selectbox With HTML CSS JS
#How To Use 
Download and import Style And JS 

    <link rel="stylesheet" href="custom_select.css">
    <script src="custom_select.js"></script>

## How To Use
Create a div with custom-select class. add your select in that div:

    <div class="custom-select">
      <select>
        <option value="">Default</option>
        <option value="1">Default</option>
        <option value="2">Default</option>
        <option value="3">Default</option>
        <option value="4">Default</option>
        <option value="5">Default</option>
      </select>
    </div>
   For to start custom_select JS call that script end of the page:

    <script>
	    custom_select();
    </script>
   That function turns all the select-boxes to custom select. The point is all selects must be in a div with a "custom-select" class.

## Usage With ID and Onchange Function

   If you want to use with only one select add an id to div like this:

	<div id="my_select" class="custom-select">
	      ...
	      .....
	      ......
and call the function like that:

    <script>
	    custom_select('my_select');
	    //custom_select(id='my_select');
    </script>

You can call onchange function tooo. for example if you want to use custom select with dynamic boxes like cities counties you can triger the custom_select for counties in cities onchange for example:

    <script>
       custom_select('my_select',onchange=getCounties);
       function  getCounties(id){
		....
		....
		custom_select('counties',getCounties);
		//custom_select(id='counties',onchange=getCounties);
		}
	</script>
