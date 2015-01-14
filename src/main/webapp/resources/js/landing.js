/**
 * Created by Airofsummer on 14.01.2015.
 */
    $(document).ready(function(){
        $( "#signpop" ).dialog({ autoOpen: false });
        $( "#signin" ).click(function() {
            $( "#signpop" ).dialog( "open" );
        });
    });
