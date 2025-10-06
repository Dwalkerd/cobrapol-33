-- Atualizar informações das federações com descrições completas
UPDATE public.federacoes 
SET 
  endereco = 'Endereço completo será atualizado em breve',
  descricao = CASE regiao
    WHEN 'Centro-Oeste' THEN 'A FEPOL-CO representa os policiais civis do Distrito Federal, Goiás, Mato Grosso e Mato Grosso do Sul, atuando na defesa dos direitos trabalhistas e previdenciários da categoria.'
    WHEN 'Nordeste' THEN 'A FEPOL-NE congrega 9 estados do Nordeste brasileiro, sendo a maior federação regional em número de estados representados, lutando pelos direitos dos policiais civis da região.'
    WHEN 'Norte' THEN 'A FEPOL-N atende toda a região Norte do Brasil, representando os interesses dos policiais civis em uma das regiões de maior desafio geográfico do país.'
    WHEN 'Sudeste' THEN 'A FEPOL-SE representa os estados mais populosos do Brasil (SP, RJ, MG, ES), sendo uma das federações com maior número de filiados e atuação estratégica.'
    WHEN 'Sul' THEN 'A FEPOL-S congrega os três estados da região Sul, conhecida pela forte organização sindical e conquistas históricas para a categoria policial.'
  END
WHERE regiao IN ('Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul');