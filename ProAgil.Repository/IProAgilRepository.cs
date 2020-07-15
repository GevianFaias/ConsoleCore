using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        void Add<T> (T entity) where T : class; 
        void Update<T> (T entity) where T : class; 
        void Delete<T> (T entity) where T : class; 

        Task<bool> SaveChangeAsync();


        //EVENTOS
        Task<Evento[]> GetAllEventosAsyncByTema(string Tema, bool includePalestantes);
        Task<Evento[]> GetAllEventosAsync(bool includePalestantes);
        Task<Evento> GetAllEventosAsyncById(int EventoId, bool includePalestantes);

        //PALESTRANTES
        Task<Palestrante[]> GetAllPalestranteAsyncByName(string name, bool includeEvento);
        Task<Palestrante> GetPalestranteAsync(int PalestranteId, bool includeEvento);
    }
}