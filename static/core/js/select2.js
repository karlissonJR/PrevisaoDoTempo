$('#cities').select2({
    ajax: {
        language: 'pt-br',
        url: CITY_URL,
        dataType: 'json',
        data: function (params) {

            var query = {
                search: capitalize(params.term),
                type: 'public'
            }

            return query;
        },
        processResults: function (data) {
            return {
                results: data.results
            };
        }
    },
    templateResult: function (repo) {
        if(repo.loading) {
            return 'Pesquisando...'
        }

        return repo.name + ' - ' + repo.state_abbreviation;
    },
    templateSelection: function (repo) {
        if (repo.name) {
            return repo.name + ' - ' + repo.state_abbreviation;
        }
        return repo.text;
    },
    
    placeholder: 'Pesquise sua cidade',
    minimumInputLength: 1,
});

$('#cities').on('change', async function() {
    const data = $('#cities').select2('data', { id:"id", text: "text"})[0];
    getWeather(data);
});