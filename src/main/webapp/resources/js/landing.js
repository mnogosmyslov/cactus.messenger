/**
 * Created by Airofsummer on 14.01.2015.
 */
    $(document).ready(function(){
        $( "#closepop").hide();
        $( "#signpop" ).dialog({
            autoOpen: false,
            minHeight: 400,
            minWidth: 300,
            height: '30%',
            width: '25%',
            modal: true,
            position: ['middle',20],
            hide: 150,
            show: 150

        });
        $( "#regpop" ).dialog({
            autoOpen: false,
            minHeight: 400,
            minWidth: 300,
            height: '30%',
            width: '25%',
            modal: true,
            position: ['middle',20],
            hide: 150,
            show: 150
        });
        $( "#signin" ).click(function() {
            $( "#signpop" ).dialog( "open" );
            $( "#closepop" ).fadeIn(50);
        });
        $( "#closepop" ).click(function() {
            $( "#signpop" ).dialog( "close" );
            $( "#regpop" ).dialog( "close" );
            $( "#closepop" ).fadeOut(50);
        });

    });
