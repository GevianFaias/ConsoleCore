using GameTOP.Intercae;

namespace GameTOP.Lib
{
    public class Jogador3 : iJogador
    {
        public string Chuta()
        {
            return $"teste corriendo \n";
        }
        
        public string Corre()
        {
            return $"teste pateando \n";
        }
        
        public string Passe()
        {
            return $"teste chutando \n";
        }
    }
}