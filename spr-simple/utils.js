export {get_query_string_variable};

function get_query_string_variable(variablename)
{
    const params = new URLSearchParams(window.location.search);
    return params.get(variablename);
}

